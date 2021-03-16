import Image from "next/image";
// import { User } from "types";

const Avatar: React.FC = ({ user }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}/?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <div>
        <figure>
          <Image
            loader={myLoader}
            src={user.avatar}
            alt={user.userName}
            width={40}
            height={40}
            className="user-avatar"
          />
        </figure>

        <span>{user.userName}</span>
      </div>

      <style jsx>{`
        div {
          padding: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        div > :global(figure) {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 6px;
        }
      `}</style>
    </>
  );
};

export default Avatar;
