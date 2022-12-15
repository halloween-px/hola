import Script from "next/script";

const Canvas = () => {
    return (
        <>
            <Script src="/script/canvas.js" strategy="defer" defer />
            <canvas />
        </>
    )
}

export default Canvas;