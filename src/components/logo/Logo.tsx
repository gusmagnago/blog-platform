type PropTypes = {
  color: string;
};

const Logo = ({ color, ...props }: PropTypes) => {
  return (
    <>
      <svg height="1em" width="1em" viewBox="0 0 48 48" {...props}>
        <path d="M0 0h48v48h-48z" fill="none" />
        <path
          d="M40 17.37v-9.37h-9.37l-6.63-6.63-6.63 6.63h-9.37v9.37l-6.63 6.63 6.63 6.63v9.37h9.37l6.63 6.63 6.63-6.63h9.37v-9.37l6.63-6.63-6.63-6.63zm-16 18.63c-1.79 0-3.48-.4-5-1.1 4.13-1.9 7-6.06 7-10.9s-2.87-9-7-10.9c1.52-.7 3.21-1.1 5-1.1 6.63 0 12 5.37 12 12s-5.37 12-12 12z"
          fill={color}
        />
      </svg>
    </>
  );
};

export default Logo;