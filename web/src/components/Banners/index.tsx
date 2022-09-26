import { GameBanner } from "../GameBanner";

type GameBannerProps = {
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
};

export type BannerProps = {
  arrBanners: Array<GameBannerProps>;
};

export function Banners(props: BannerProps) {
  return (
    <div className="grid grid-cols-6 gap-6 mt-4">
      {props.arrBanners.map((item) => (
        <GameBanner
          key={item.title}
          title={item.title}
          bannerUrl={item.bannerUrl}
          adsCount={item._count.ads}
        />
      ))}
    </div>
  );
}
