type ContainerProps = {
  children: React.ReactNode;
};

export function Container(props: ContainerProps) {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      {props.children}
    </div>
  );
}
