import Link from "next/link"

export default function Component() {
  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 md:p-6">
      <div className="relative overflow-hidden rounded-lg group">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">Read more</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="News article image"
          width={400}
          height={300}
          className="object-cover w-full h-60"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold md:text-xl">Groundbreaking Discovery in Quantum Physics</h3>
          <p className="text-sm text-muted-foreground">
            Scientists uncover a new fundamental particle that could revolutionize our understanding of the universe.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg group">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">Read more</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="News article image"
          width={400}
          height={300}
          className="object-cover w-full h-60"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold md:text-xl">Sustainable Fashion Trends for 2023</h3>
          <p className="text-sm text-muted-foreground">
            Explore the latest eco-friendly fashion designs and how they are shaping the industry.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg group">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">Read more</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="News article image"
          width={400}
          height={300}
          className="object-cover w-full h-60"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold md:text-xl">The Future of Autonomous Vehicles</h3>
          <p className="text-sm text-muted-foreground">
            Experts weigh in on the advancements and challenges in the self-driving car industry.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg group">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">Read more</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="News article image"
          width={400}
          height={300}
          className="object-cover w-full h-60"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold md:text-xl">The Rise of Cryptocurrency in Developing Countries</h3>
          <p className="text-sm text-muted-foreground">
            Exploring how digital currencies are transforming financial access and inclusion in emerging markets.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg group">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">Read more</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="News article image"
          width={400}
          height={300}
          className="object-cover w-full h-60"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold md:text-xl">The Future of Remote Work</h3>
          <p className="text-sm text-muted-foreground">
            Experts discuss the long-term implications of the shift to remote and hybrid work models.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg group">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">Read more</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="News article image"
          width={400}
          height={300}
          className="object-cover w-full h-60"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold md:text-xl">The Impact of AI on Healthcare</h3>
          <p className="text-sm text-muted-foreground">
            Exploring how artificial intelligence is transforming the medical industry and improving patient outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}