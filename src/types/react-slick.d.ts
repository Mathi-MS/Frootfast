declare module "react-slick" {
  import * as React from "react";

  export interface Settings {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    afterChange?: (currentSlide: number) => void;
    appendDots?: (dots: React.ReactNode) => JSX.Element;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
    centerMode?: boolean;
    centerPadding?: string;
    className?: string;
    cssEase?: string;
    customPaging?: (i: number) => JSX.Element;
    dots?: boolean;
    dotsClass?: string;
    draggable?: boolean;
    easing?: string;
    fade?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: "ondemand" | "progressive";
    pauseOnDotsHover?: boolean;
    pauseOnFocus?: boolean;
    pauseOnHover?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
    rows?: number;
    rtl?: boolean;
    slide?: string;
    slidesPerRow?: number;
    slidesToScroll?: number;
    slidesToShow?: number;
    speed?: number;
    swipe?: boolean;
    swipeToSlide?: boolean;
    touchMove?: boolean;
    touchThreshold?: number;
    variableWidth?: boolean;
    vertical?: boolean;
    verticalSwiping?: boolean;
    waitForAnimate?: boolean;
  }

  export default class Slider extends React.Component<Settings> {}
}
