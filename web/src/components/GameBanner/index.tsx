import { GameBannerProps } from "../../types/GameBannerProps";

type Props = Omit<GameBannerProps, "_count">;

type BannerProps = {
  adsCount: number;
} & Props;

export function GameBanner(props: BannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img key={props.title} src={props.bannerUrl} alt={props.title} />
      <div className=" w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
        <strong className="font-bold text-white">{props.title}</strong>
        <span className="text-zinc-300 text-sm block mt-1">{`${props.adsCount} anúncio(s)`}</span>
      </div>
    </a>
  );
}
