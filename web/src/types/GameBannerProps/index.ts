export type GameBannerProps = {
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
};

type Props = Omit<GameBannerProps, "_count">;

export type BannerProps = {
  adsCount: number;
} & Props;
