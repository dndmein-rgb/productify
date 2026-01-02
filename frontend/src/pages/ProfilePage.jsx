import { Link, useNavigate } from "react-router";
import { useMyProducts, useDeleteProduct } from "../hooks/useProducts";
import LoadingSpinner from "../components/LoadingSpinner";
import { PlusIcon, PackageIcon, EyeIcon, EditIcon, Trash2Icon, TrendingUp } from "lucide-react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { data: products, isLoading } = useMyProducts();
  const deleteProduct = useDeleteProduct();

  const handleDelete = (id) => {
    if (confirm("Delete this product?")) {
      deleteProduct.mutate(id, {
        onError: (error) => {
          alert(`Failed to delete product: ${error.message}`);
        }
      });
    }
  };
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">My Products</h1>
          <p className="text-base-content/60">Manage and showcase your listings</p>
        </div>
        <Link to="/create" className="btn btn-primary btn-lg gap-2 btn-hover-lift shadow-lg hidden sm:flex">
          <PlusIcon className="size-5" /> Create New
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 card-hover">
          <div className="card-body items-center text-center">
            <div className="text-4xl font-bold text-primary">{products?.length || 0}</div>
            <p className="text-base-content/70 font-medium">Total Products</p>
          </div>
        </div>
        <div className="card bg-linear-to-br from-success/10 to-success/5 border border-success/20 shadow-md hover:shadow-lg transition-all duration-300 card-hover">
          <div className="card-body items-center text-center">
            <div className="text-4xl font-bold text-success">100%</div>
            <p className="text-base-content/70 font-medium">Visibility</p>
          </div>
        </div>
      </div>

      {/* Products List */}
      {products?.length === 0 ? (
        <div className="card bg-linear-to-br from-base-200 to-base-300 border border-base-300 shadow-lg">
          <div className="card-body items-center text-center py-20 space-y-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <PackageIcon className="size-16 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="card-title text-2xl">No products yet</h3>
              <p className="text-base-content/60 text-lg">Start by creating your first product</p>
            </div>
            <Link to="/create" className="btn btn-primary btn-lg gap-2 btn-hover-lift mt-4">
              <PlusIcon className="size-5" />
              Create Your First Product
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="size-6 text-primary" />
            Your Listings
          </h2>
          <div className="grid gap-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="card card-side bg-linear-to-r from-base-100 to-base-200 border border-base-300 shadow-md hover:shadow-xl transition-all duration-300 card-hover overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <figure className="w-40 shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </figure>
                <div className="card-body p-4 flex flex-row items-center justify-between">
                  <div className="flex-1">
                    <h2 className="card-title text-lg group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h2>
                    <p className="text-sm text-base-content/60 line-clamp-1 group-hover:text-base-content/80 transition-colors duration-300">
                      {product.description}
                    </p>
                    <div className="text-xs text-base-content/50 mt-2">
                      {product.comments?.length || 0} comments
                    </div>
                  </div>
                  <div className="card-actions gap-2 flex-col sm:flex-row">
                    <button
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="btn btn-outline btn-sm gap-1 hover:bg-primary/10 transition-all duration-300"
                    >
                      <EyeIcon className="size-4" /> View
                    </button>
                    <button
                      onClick={() => navigate(`/edit/${product.id}`)}
                      className="btn btn-outline btn-sm gap-1 hover:bg-accent/10 transition-all duration-300"
                    >
                      <EditIcon className="size-4" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-outline btn-sm gap-1 text-error hover:bg-error/10 transition-all duration-300"
                      disabled={deleteProduct.isPending}
                    >
                      <Trash2Icon className="size-4" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
