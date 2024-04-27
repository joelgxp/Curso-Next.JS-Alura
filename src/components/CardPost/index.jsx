import Image from "next/image"

import { Avatar } from "../Avatat"

export const CardPost = ({ post }) => {
    return (
        <article>
            <header>
                <figure>
                    <Image src={post.cover} width={438} height={133} alt={`Titulo ${post.title}`} />
                </figure>
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                texto
            </section>
            <footer>
                <Avatar 
                    imageSrc={post.author.avatar}
                    name={post.author.username}
                />
            </footer>
        </article>
    )
}