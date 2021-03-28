declare global {
  interface BUrl {
    cached_url?: string;
    fieldtype: "multilink";
    id?: string;
    linktype: "email" | "url";
    url?: string;
    email?: string;
    prep?: boolean;
  }
}
export {};
