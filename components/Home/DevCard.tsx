import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const DevCard: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="text-2xl font-bold">Dev Card</h1>
        <Link href="https://app.daily.dev/developersayem012">
          <Image
            src="https://api.daily.dev/devcards/v2/CQgVH4yR4I2KmPuQbreXy.png?type=wide&r=pt1"
            height={500}
            width={600}
            alt="Dev Card"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default DevCard;
