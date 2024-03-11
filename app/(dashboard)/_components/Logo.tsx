import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex">
      <Image
        height={30}
        width={30}
        className="mx-3 grow-0 shrink-0"
        alt="logo"
        src="/logo.svg"
      />
      <span className="text-xl font-bold text-sky-700 dark:text-slate-200">
        Edu-Hub
      </span>
    </div>
  );
};
