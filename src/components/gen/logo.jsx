export default function Logo({size, ...props}) {
    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 9 9`} width={size} height={size} {...props}>
            <path id="Camada 1" className="s0" d="m0 9h2v-1h1v-2h1v-2h1v2h1v2h1v1h2v-3h-1v-2h-1v-2h-1v-2h-3v2h-1v2h-1v2h-1z" />
        </svg>
    )
}