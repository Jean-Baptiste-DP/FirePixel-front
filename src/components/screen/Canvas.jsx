import React from 'react';
import useCursor from '../../hook/useCursor';
import usePixels from '../../hook/usePixels';

const colorList = ['#10B981', '#4ADE80', '#D9F99D', '#FDE047', '#F59E0B', '#EF4444', '#FB7185', '#67E8F9', '#0EA5E9', '#A8B4FC', '#A855F7', '#92400E', '#000000', '#94A3B8', '#E2E8F0', '#FFFFFF'];

export default function Canvas({ grid, newPixel, squareSide, cursors}) {
    
    function draw_pixel(ctx, x, y, color){
      ctx.fillStyle = colorList[color];
      ctx.fillRect(x*squareSide,y*squareSide,squareSide,squareSide)
    }

    function draw_cursor(ctx, x, y, color){
      console.log("Pixel position x:",x,", y:",y," couleur:",color)
    }

    const height = grid.length*squareSide;
    const width = grid[0].length*squareSide;
    const canvasRef = usePixels(grid, draw_pixel, newPixel)

    useCursor(grid, draw_pixel, canvasRef, cursors, draw_cursor)
    
    return <canvas ref={canvasRef} height={height} width={width}/>
}