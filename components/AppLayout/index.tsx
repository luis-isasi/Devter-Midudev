import styles, { globalStyle } from "./styles";

const index: React.FC = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx global>
        {globalStyle}
      </style>
      <style jsx>{styles}</style>
    </>
  );
};

export default index;
