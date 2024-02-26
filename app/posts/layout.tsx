import Footer from "@/component/ui/FooterComp"


export default function BlogPostLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        {children}
        
      </section>
    )
  }