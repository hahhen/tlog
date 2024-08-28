export default function Logo({size, ...props}) {
    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 9 9`} width={size} height={size} {...props}>
            <path data-name="Forma 1" className="cls-1" d="M7 3H2V2h5z"/><path data-name="Forma 2" className="cls-1" d="M7 1v1h1v2h1V1z"/><path data-name="Forma 3" className="cls-1" d="M7 4v2H6v1H5v1h2V7h1V4z"/><path data-name="Forma 4" d="M4 8h1v1H4z"/><path data-name="Forma 5" className="cls-1" d="M4 7v1H2V7H1V4h1v2h1v1z"/><path data-name="Forma 6" className="cls-1" d="M1 4H0V1h2v1H1z"/><path data-name="Forma 7" className="cls-1" d="M2 3h5V2H2z"/><path data-name="Forma 8" className="cls-1" d="M3 4v1h1V4z"/><path data-name="Forma 9" className="cls-1" d="M5 4v1h1V4z"/>
        </svg>
    )
}