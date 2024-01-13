import { BREAKPOINT_FOR_IMG } from "@/_src/constants/breakpoints";
import { ImageResponsiveType } from "./image-resp.type";

const ImageResp = (props: ImageResponsiveType) => {
  const {srcPC, srcSP, srcWebpPC, srcWebpSP, widthPC, heightPC, widthSP, heightSP, altText} = props;

  return (
    <picture>
      {srcWebpPC && <source srcSet={srcWebpPC} media={`(min-width: ${BREAKPOINT_FOR_IMG}px)`} type="image/webp" />}
      {srcWebpSP && <source srcSet={srcWebpSP} type="image/webp" />}
      <source srcSet={srcSP} media={`(min-width: ${BREAKPOINT_FOR_IMG}px)`} {...(widthSP && { width: widthSP })} {...(heightSP && { height: heightSP })}　/>
      <img src={srcPC} {...(widthPC && { width: widthPC })} {...(heightPC && { height: heightPC })} alt={altText} />
    </picture>
  )

}

export default ImageResp;