import { colors } from '@styles/theme';

interface ButtonProps {
  onClick?: () => void;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          background-color: ${colors.black};
          color: #fff;
          border-radius: 24px;
          border: none;
          cursor: pointer;
          padding: 8px 16px;

          display: flex;
          justify-content: center;
          align-items: center;
        }
        button > :global(svg) {
          margin-right: 8px;
        }
        button:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
};

export default Button;
