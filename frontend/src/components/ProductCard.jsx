import { Link } from "react-router";
import { MessageCircleIcon, TrendingUp } from "lucide-react";

const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

const ProductCard = ({ product }) => {
  const isNew = new Date(product.createdAt) > oneWeekAgo;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group card bg-base-100 border border-base-300 hover:border-primary/50 card-hover shadow-md hover:shadow-2xl overflow-hidden"
    >
      {/* Image Container */}
      <figure className="px-4 pt-4 relative overflow-hidden bg-linear-to-br from-base-200 to-base-300">
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img
          src={product.imageUrl}
          alt={product.title}
          className="rounded-xl h-40 w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        {isNew && (
          <div className="absolute top-6 right-6 z-20">
            <span className="badge badge-primary badge-lg gap-1 shadow-lg animate-pulse">
              <TrendingUp className="size-3" />
              NEW
            </span>
          </div>
        )}      </figure>

      {/* Content */}
      <div className="card-body p-4 space-y-3">
        <h2 className="card-title text-base line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {product.title}
        </h2>
        <p className="text-sm text-base-content/70 line-clamp-2 group-hover:text-base-content/80 transition-colors duration-300">
          {product.description}
        </p>

        <div className="divider my-2"></div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          {product.user && (
            <div className="flex items-center gap-2 group/user">
              <div className="avatar">
                <div className="w-7 rounded-full ring-2 ring-primary/30 group-hover/user:ring-primary transition-all duration-300">
                  <img src={product.user.imageUrl} alt={product.user.name} />
                </div>
              </div>
              <span className="text-xs text-base-content/60 group-hover/user:text-primary transition-colors duration-300 font-medium">
                {product.user.name}
              </span>
            </div>
          )}
          {product.comments?.length > 0 && (
            <div className="flex items-center gap-1 text-base-content/50 group-hover:text-primary transition-colors duration-300 bg-base-200 px-2 py-1 rounded-full">
              <MessageCircleIcon className="size-3" />
              <span className="text-xs font-semibold">{product.comments.length}</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Link>
  );
};

export default ProductCard;
