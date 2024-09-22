"use client";
import React from "react";
import { Button, Result } from "antd";

import HeaderCart from "../card/HeaderCart";
import Link from "next/link";

const Blog: React.FC = () => {
  return (
    <div className="w-full">
      <HeaderCart pageName="Blog" />

      <div className="w-full mt-5 tablet:mt-10 flex justify-center items-center">
        <Result
          status="500"
          title="500🥺"
          subTitle="Sorry, something went wrong. please try again later !"
          extra={<Link href='/'><Button type="primary">Back Home</Button></Link>}
        />
      </div>
    </div>
  );
};

export default Blog;
