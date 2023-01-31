import { useRef, useEffect } from "react";



export default function useCursor(ref, draw, cursor, newPixel){

	function drawOverlay(){
		const canvas = ref.current
		const context = canvas.getContext('2d')
		draw(context, cursor);
		
	}

	useEffect(() => {
		drawOverlay()
		}
	, [cursor,newPixel]);

    return ref
}