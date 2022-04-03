import { keyframes } from "@chakra-ui/react";

export default function usePulseAnimation(
  red: number,
  green: number,
  blue: number
) {
  const RGBColor = `${red}, ${green}, ${blue}`;

  const pulse = keyframes`
  	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 10px rgba(${RGBColor}, 0.7);
	}
	
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 30px rgba(${RGBColor}, 0);
    }

    90% {
      transform: scale(1);
      box-shadow: 0 0 0 45px rgba(${RGBColor}, 0);
    }
    
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(${RGBColor}, 0);
    }
  `;

  const cssValue = `${pulse} infinite 2s linear`;

  return cssValue;
}
