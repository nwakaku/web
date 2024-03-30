import { useDataMessage } from "@huddle01/react/hooks";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

const MAX_RATE = 44100;

const ShowCaptions = ({ mediaStream, name, localPeerId }) => {
  const [remoteCaptions, setRemoteCaptions] = useState("");
  const [remoteSpeaker, setRemoteSpeaker] = useState("");
  const { sendData } = useDataMessage({
    onMessage(payload, from, label) {
      if (label === "captions") {
        const { message, name } = JSON.parse(payload);
        setRemoteCaptions(message);
        setRemoteSpeaker(localPeerId === from ? "You" : name);
      }
    },
  });

  const sendCaptions = async (captions) => {
    await sendData({
      to: "*",
      payload: JSON.stringify({
        name: name,
        message: captions,
      }),
      label: "captions",
    });
  };

  const microPhoneStream = useMemo(() => {
    if (!mediaStream) return;
    const microStream = new MicrophoneStream();
    microStream.setStream(mediaStream);
    return microStream;
  }, [mediaStream]);

  const encodePCMChunk = useCallback(
    (chunk) => {
      const input = MicrophoneStream.toRaw(chunk);
      let offset = 0;
      const buffer = new ArrayBuffer(input.length * 2);
      const view = new DataView(buffer);
      for (let i = 0; i < input.length; i++, offset += 2) {
        let s = Math.max(-1, Math.min(1, input[i]));
        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
      }
      return Buffer.from(buffer);
    },
    [mediaStream]
  );

  const startStreaming = useCallback(async (callback) => {
    if (!transcribeClient) return;
    const command = new StartStreamTranscriptionCommand({
      LanguageCode: "en-US",
      MediaEncoding: "pcm",
      MediaSampleRateHertz: MAX_RATE,
      AudioStream: getAudioStream(),
    });

    try {
      const data = await transcribeClient.send(command);
      if (!data.TranscriptResultStream) return;

      for await (const event of data.TranscriptResultStream) {
        if (event.TranscriptEvent && event.TranscriptEvent.Transcript) {
          const results = event.TranscriptEvent.Transcript.Results;
          if (
            results &&
            results.length &&
            !results[0]?.IsPartial &&
            results[0]?.Alternatives?.length
          ) {
            const newTranscript = results[0].Alternatives[0].Transcript;
            callback(newTranscript + " ");
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  });

  useEffect(() => {
    if (mediaStream) {
      startStreaming((text) => {
        sendCaptions(text);
      });
    }
  }, [mediaStream, startStreaming]);

  return (
    <>
      {remoteCaptions.length > 0 && (
        <div>
          <div className="text-white text-2xl text-center">
            {remoteSpeaker}: {remoteCaptions}
          </div>
        </div>
      )}
    </>
  );
};

export default memo(ShowCaptions);
