import { PackageIcon, SparklesIcon, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router";
import { useRef } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductCard from "../components/ProductCard";
import { SignInButton } from "@clerk/clerk-react";
import { useProducts } from "../hooks/useProducts";

function HomePage() {
  const { data: products, isLoading, error } = useProducts();
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div role="alert" className="alert alert-error shadow-lg animate-fade-in-up">
        <span>Something went wrong. Please refresh the page.</span>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* HERO SECTION */}
      <div className="hero bg-linear-to-br from-primary/10 via-accent/5 to-base-100 rounded-2xl overflow-hidden border border-primary/20 shadow-xl animate-fade-in-up">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 py-16 px-6">
          {/* Hero Image */}
          <div className="relative flex-1 animate-slide-in-right ml-4">
            <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-accent/20 blur-3xl rounded-full scale-110 animate-pulse-soft" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" />
            <img
              src="/image.png"
              alt="Creator"
              className="relative h-64 lg:h-80 rounded-2xl shadow-2xl object-cover border-4 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105"            />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left flex-1 animate-slide-in-left space-y-6">
            <div className="space-y-3">
              <div className="inline-block">
                <span className="badge badge-primary badge-lg gap-2 px-4 py-3 text-sm font-semibold">
                  <Zap className="size-4" />
                  Welcome to Mercato
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Share Your
                <span className="block bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-soft">
                  Products
                </span>
              </h1>
            </div>
            <p className="text-lg text-base-content/70 leading-relaxed max-w-md mx-auto lg:mx-0">
              Upload, discover, and connect with creators worldwide. Build your marketplace presence with Mercato.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg gap-2 btn-hover-lift shadow-lg">
                  <SparklesIcon className="size-5" />
                  Start Selling
                  <ArrowRight className="size-5" />
                </button>
              </SignInButton>
              <button onClick={scrollToProducts} className="btn btn-outline btn-lg gap-2 hover:bg-primary/10">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="card bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 card-hover">
          <div className="card-body items-center text-center">
            <div className="text-4xl font-bold text-primary">{products?.length || 0}</div>
            <p className="text-base-content/70 font-medium">Products Listed</p>
          </div>
        </div>
        <div className="card bg-linear-to-br from-accent/10 to-accent/5 border border-accent/20 shadow-md hover:shadow-lg transition-all duration-300 card-hover">
          <div className="card-body items-center text-center">
            <div className="text-4xl font-bold text-accent">100%</div>
            <p className="text-base-content/70 font-medium">Creator Owned</p>
          </div>
        </div>
        <div className="card bg-linear-to-br from-success/10 to-success/5 border border-success/20 shadow-md hover:shadow-lg transition-all duration-300 card-hover">
          <div className="card-body items-center text-center">
            <div className="text-4xl font-bold text-success">24/7</div>
            <p className="text-base-content/70 font-medium">Always Available</p>
          </div>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div ref={productsRef} className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <PackageIcon className="size-6 text-primary" />
              </div>
              Featured Products
            </h2>
            <p className="text-base-content/60">Discover amazing products from our community</p>
          </div>
          {products?.length > 0 && (
            <Link to="/create" className="btn btn-primary btn-sm gap-1 btn-hover-lift hidden md:flex">
              <SparklesIcon className="size-4" />
              Add Yours
            </Link>
          )}
        </div>

        {products?.length === 0 ? (
          <div className="card bg-linear-to-br from-base-200 to-base-300 border border-base-300 shadow-lg">
            <div className="card-body items-center text-center py-20 space-y-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <PackageIcon className="size-16 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="card-title text-2xl text-base-content">No products yet</h3>
                <p className="text-base-content/60 text-lg">Be the first to share something amazing!</p>
              </div>
              <Link to="/create" className="btn btn-primary btn-lg gap-2 btn-hover-lift mt-4">
                <SparklesIcon className="size-5" />
                Create Your First Product
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-fade-in-up"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA SECTION */}
      {products?.length > 0 && (
        <div className="card bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 border border-primary/30 shadow-xl animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="card-body items-center text-center py-12 space-y-6">
            <h3 className="text-2xl font-bold">Ready to showcase your products?</h3>
            <p className="text-base-content/70 max-w-md">Join thousands of creators selling on Mercato today</p>
            <SignInButton mode="modal">
             <Link
  to="/create"
  className="btn btn-primary btn-lg gap-2 btn-hover-lift shadow-lg flex items-center"
>
  <SparklesIcon className="size-5" />
  <span>Get Started Now</span>
</Link>

            </SignInButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;