import { DivGithubCard } from "../stylesTags/DivGithubCard";
import { ImgAvatar } from "../stylesTags/Img";

export default function GitHub({ cardImage, cardList }) {
  return (
    <>
      {cardList &&
        cardList.map((item) => (
          <DivGithubCard key={item.id}>
            <ImgAvatar
              className="avatar"
              alt="Avatar do repositório"
              src={cardImage}
            />
            <h2>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
            <a href={item.html_url}>Acesso</a>
          </DivGithubCard>
        ))}
    </>
  );
}
