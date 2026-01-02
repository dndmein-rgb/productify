import { Link, useNavigate } from "react-router";
import { useCreateProduct } from "../hooks/useProducts";
import { useState } from "react";
import {
  ArrowLeftIcon,
  FileTextIcon,
  ImageIcon,
  SparklesIcon,
  TypeIcon,
} from "lucide-react";

function CreatePage() {
  const navigate = useNavigate();
  const createProduct = useCreateProduct();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct.mutate(formData, {
      onSuccess: () => navigate("/"),
    });
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-2xl">
        {/* Back */}
        <Link to="/" className="btn btn-ghost btn-sm gap-1 mb-6">
          <ArrowLeftIcon className="size-4" />
          Back
        </Link>

        <div className="card bg-base-200 border border-base-300 shadow-2xl">
          <div className="card-body p-8 space-y-8">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <SparklesIcon className="size-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">New Product</h1>
                <p className="text-base-content/60">
                  Add a new product to your catalog
                </p>
              </div>
            </div>

            <div className="divider" />

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* TITLE */}
              <div className="form-control space-y-2">
                <label className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <TypeIcon className="size-5 text-primary" />
                  </div>
                  <span className="font-bold text-lg leading-none">
                    Product Title
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Product title"
                  className="input input-bordered input-lg w-full"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              {/* IMAGE URL */}
              <div className="form-control space-y-2">
                <label className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <ImageIcon className="size-5 text-primary" />
                  </div>
                  <span className="font-bold text-lg leading-none">
                    Image URL
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered input-lg w-full"
                  value={formData.imageUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                  required
                />
              </div>

              {/* IMAGE PREVIEW */}
              {formData.imageUrl && (
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-base-content/60">
                    Preview
                  </p>
                  <div className="rounded-xl overflow-hidden border border-base-300">
                    <img
                      src={formData.imageUrl}
                      alt="Preview"
                      className="w-full h-64 object-cover"
                      onError={(e) =>
                        (e.currentTarget.style.display = "none")
                      }
                    />
                  </div>
                </div>
              )}

              {/* DESCRIPTION */}
              <div className="form-control space-y-2">
                <label className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <FileTextIcon className="size-5 text-primary" />
                  </div>
                  <span className="font-bold text-lg leading-none">
                    Description
                  </span>
                </label>
                <textarea
                  placeholder="Describe your product"
                  className="textarea textarea-bordered textarea-lg w-full resize-none min-h-40"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* ERROR */}
              {createProduct.isError && (
                <div role="alert" className="alert alert-error">
                  Failed to create. Try again.
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="btn btn-primary btn-lg w-full"
                disabled={createProduct.isPending}
              >
                {createProduct.isPending ? (
                  <span className="loading loading-spinner" />
                ) : (
                  "Create Product"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
