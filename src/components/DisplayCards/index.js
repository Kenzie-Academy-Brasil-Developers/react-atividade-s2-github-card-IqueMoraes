import { DivGithubCard } from "../stylesTags/DivGithubCard";
import { ImgAvatar } from "../stylesTags/Img";

export default function GitHub({ conditional, cardList }) {
  return (
    <>
      {cardList &&
        cardList.map((item) => (
          <DivGithubCard key={item.id}>
            <ImgAvatar
              className="avatar"
              alt="Avatar do repositório"
              src={item.owner.avatar_url}
            />
            <h2>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
            <a href={item.html_url}>Acesso</a>
          </DivGithubCard>
        ))}
    </>
  );
}
