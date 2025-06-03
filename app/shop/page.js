import Products from "../../components/Products";

export default async function Shop() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <Products />
    </div>
  );
}


/**
    <Suspense fallback={<p className={classes.loading}>Looding....</p>}>
       <Products />
     </Suspense>
 */