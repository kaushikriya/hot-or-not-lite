import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface Video {
  id: string;
  url: string;
}

type UseGetVideosResult = UseQueryResult<Video[], Error>;

export const useGetVideos = (): UseGetVideosResult => {
  const data: UseGetVideosResult = useQuery({
    queryKey: ["VIDEOS"],
    queryFn: async () => {
      const response = await fetch(
        "https://65803cdd6ae0629a3f54b7fb.mockapi.io/api/videos/mp4"
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const stream = response.body;
      const textDecoder = new TextDecoder("utf-8");
      const reader = stream?.getReader();
      let chunks = "";

      while (true) {
        const result = await reader?.read();

        if (result?.done) {
          break;
        }

        chunks += textDecoder.decode(result?.value);
      }

      const jsonData = JSON.parse(chunks) as Video[];

      return jsonData;
    },
  });

  return data;
};
