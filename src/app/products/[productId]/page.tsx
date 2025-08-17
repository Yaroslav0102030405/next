const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <>
      <h1>Опис одного продукта {productId}</h1>
    </>
  );
};

export default ProductDetails;
