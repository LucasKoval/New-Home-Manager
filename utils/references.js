//// Import Theme Properties ////
/*
    color: ${({ theme }) => theme.color.darkGrey}
    max-width: ${({ theme }) => theme.device.mobile}
*/

//// Viewport Sizes ////
/*
    Default value // Desktop (> 768px)
    @media (max-width: 768px) {} // Tablet (<= 768px)
    @media (max-width: 425px) {} // Mobile (<= 425px)
*/

//// Next ProgressBar Default Config ////
/*
    <NextNprogress
    color="#29D"         // color: to change the default color of progressbar. You can also use rgb(0,0,0) or rgba(0,0,0,0).
    startPosition={0.3}  // startPosition: to set the default starting position : 0.3 = 30%
    stopDelayMs={200}    // stopDelayMs: time for delay to stop progressbar in ms.
    height={3}           // height: height of progressbar in px.
    showOnShallow={true} // showOnShallow: You can choose whether you want the progressbar to be displayed if you're using shallow routing. It takes a boolean.
    />
*/
