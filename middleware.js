export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/logout", "/bookUpload", "/productDetail", "/allAddedCarts"],
};
