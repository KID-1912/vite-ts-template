import { useRouter } from "vue-router";
// import { ElMessage } from "element-plus";

export function resErrorPreHandle(code: number | string, message: string) {
  code = String(code);
  message = String(message);
  const router = useRouter();

  switch (true) {
    case code === "401":
      // ElMessage.warning("登录过期");
      router.replace({ name: "login" });
      break;
  }
}

export function extractFilenameFromContentDisposition(contentDisposition: string) {
  const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  const matches = filenameRegex.exec(contentDisposition);
  if (matches !== null && matches[1]) {
    return decodeURIComponent(matches[1].replace(/(utf-8)?['"]/g, ""));
  }
  return "download";
}
