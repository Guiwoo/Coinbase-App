import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "evnpf345",
  dataset: "production",
  apiVersion: "2022-01-30",
  token:
    "skl3NchLlKRXvRHw31rFsMSCKkTekQoDFapeIlLFrYvlbK6WbokHfNJx3e7gcqb2wYMgcAXMMePhwJAmrka5ZJk46UXBBqAb4aExCXTmgAAK9cWC0tYzW3BDiemfQY8ZUWrdSex4erVx6P8fJ8pbJXAO80fIRnHWMLEkEyJsLBW3FgC5UnWR",
  useCdn: false,
});
