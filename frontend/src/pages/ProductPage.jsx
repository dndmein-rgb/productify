import { ArrowLeftIcon, EditIcon, Trash2Icon, CalendarIcon, UserIcon, Share2Icon } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";
import CommentsSection from "../components/CommentsSection";
import { useAuth } from "@clerk/clerk-react";
import { useProduct, useDeleteProduct } from "../hooks/useProducts";
import { useParams, Link, useNavigate } from "react-router";

function ProductPage() {
  const { id } = useParams();
  const { userId } = useAuth();
  const navigate = useNavigate();

  const { data: product, isLoading, error } = useProduct(id);
  const deleteProduct = useDeleteProduct();

  const handleDelete = () => {
    if (confirm("Delete this product permanently?")) {
      deleteProduct.mutate(id, {
        onSuccess: () => navigate("/"),
        onError: () => alert("Failed to delete product. Please try again."),
      });
    }
  };
  if (isLoading) return <LoadingSpinner />;

  if (error || !product) {
    return (
      <div className="card bg-linear-to-br from-error/10 to-error/5 border border-error/20 max-w-md mx-auto animate-fade-in-up">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-error">Product not found</h2>
          <Link to="/" className="btn btn-primary btn-sm btn-hover-lift">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const isOwner = userId === product.userId;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
      {/* Header Navigation */}
      <div className="flex items-center justify-between">
        <Link to="/" className="btn btn-ghost btn-sm gap-1 hover:bg-primary/10 transition-all duration-300">
          <ArrowLeftIcon className="size-4" /> Back to Products
        </Link>
        {isOwner && (
          <div className="flex gap-2">
            <Link to={`/edit/${product.id}`} className="btn btn-outline btn-sm gap-1 hover:bg-primary/10 transition-all duration-300">
              <EditIcon className="size-4" /> Edit
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-sm gap-1 btn-hover-lift"
              disabled={deleteProduct.isPending}
            >
              {deleteProduct.isPending ? (
                <span className="loading loading-spinner loading-xs" />
              ) : (
                <Trash2Icon className="size-4" />
              )}
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="card bg-linear-to-br from-base-200 to-base-300 border border-base-300 shadow-xl overflow-hidden card-hover">
          <figure className="p-6 bg-linear-to-br from-primary/10 to-accent/10">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="rounded-xl w-full h-96 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </figure>
        </div>

        {/* Details Section */}
        <div className="card bg-linear-to-br from-base-100 to-base-200 border border-base-300 shadow-xl">
          <div className="card-body space-y-6">
            <div className="space-y-3">
              <h1 className="card-title text-3xl lg:text-4xl leading-tight">{product.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-base-content/70">
                <div className="flex items-center gap-2 bg-base-300/50 px-3 py-2 rounded-lg">
                  <CalendarIcon className="size-4 text-primary" />
                  {new Date(product.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </div>

            <div className="divider my-2"></div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">About this product</h3>
              <p className="text-base-content/80 leading-relaxed text-justify">{product.description}</p>
            </div>

            {product.user && (
              <>
                <div className="divider my-2"></div>
                <div className="bg-linear-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-4 space-y-3">
                  <p className="text-sm font-semibold text-base-content/70">Creator</p>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-14 rounded-full ring-2 ring-primary/30 hover:ring-primary transition-all duration-300">
                        <img src={product.user.imageUrl} alt={product.user.name} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">{product.user.name}</p>
                      <p className="text-xs text-base-content/60">Verified Creator</p>
                    </div>
                  </div>
                </div>
              </>
            )}


          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="card bg-linear-to-br from-base-100 to-base-200 border border-base-300 shadow-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="card-body">
          <CommentsSection productId={id} comments={product.comments} currentUserId={userId} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;