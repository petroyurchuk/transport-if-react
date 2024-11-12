type ContactButtonProps = {
  children: React.ReactNode;
  bgColor: string;
  link: string;
};
const ContactButton: React.FC<ContactButtonProps> = ({
  children,
  bgColor,
  link,
}) => {
  return (
    <a
      href={link}
      className={`${bgColor} w-[90%] md:w-full   md:max-w-[500px]  py-2 text-center text-white font-semibold transition-all hover:bg-opacity-80 rounded-lg`}
    >
      {children}
    </a>
  );
};
export default ContactButton;
