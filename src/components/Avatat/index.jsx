import Image from "next/image"

export const Avatar = ({name, imgSrc}) => {
    return (
        <ul>
            <li>
                <Image src={imgSrc} width={32} height={32} alt={`Imagem ${name}`} />
            </li>
            <li>
                @{name}
            </li>
        </ul>
    )
}