import { ProductMenu } from '@/components/shared/product-menu';
import { Step } from '@/components/shared/step';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1300px] mx-auto mt-8 gap-5 px-4 ">
      <div className="flex mb-5 ">
        <div className="w-[30%]">
          <ProductMenu />
        </div>

        <div className="w-[70%] flex justify-center">
          <div className="w-full max-w-[600px]">{children}</div>
        </div>
      </div>
      <Step url={'/page/category/details-order'} />
    </div>
  );
}
