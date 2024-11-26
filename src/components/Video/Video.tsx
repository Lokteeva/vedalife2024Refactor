import { Row } from "../../shared";

export const Video = () => {
  return (
    <Row mb={24} justify="center">
      <iframe
        src="https://vk.com/video_ext.php?oid=-42933644&id=456239337&hd=2&autoplay=1"
        width="853"
        height="480"
        title="Vedalife"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        frameborder="0"
        allowfullscreen
      />
    </Row>
  );
};
