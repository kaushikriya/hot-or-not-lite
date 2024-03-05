import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface Video {
  id: string;
  createdAt: string;
  uploadedByName: string;
  uploaderByUserName: string;
  uploadedByAvatar: string;
  title: string;
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

      const jsonData = await response.json();

      return jsonData as Video[];
    },
  });

  return data;
};
