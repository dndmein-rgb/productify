import { useState } from "react";
import { useAuth, SignInButton } from "@clerk/clerk-react";
import { useCreateComment, useDeleteComment } from "../hooks/useComments";
import {
  SendIcon,
  Trash2Icon,
  MessageSquareIcon,
  LogInIcon,
} from "lucide-react";

function CommentsSection({ productId, comments = [], currentUserId }) {
  const { isSignedIn } = useAuth();
  const [content, setContent] = useState("");
  const createComment = useCreateComment();
  const deleteComment = useDeleteComment(productId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    createComment.mutate(
      { productId, content },
      { onSuccess: () => setContent("") }
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/20 rounded-lg">
          <MessageSquareIcon className="size-5 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Comments</h3>
          <p className="text-xs text-base-content/60">{comments.length} {comments.length === 1 ? 'comment' : 'comments'}</p>
        </div>
      </div>

      {isSignedIn ? (
        <form onSubmit={handleSubmit} className="flex gap-2 animate-fade-in-up">
          <input
            type="text"
            placeholder="Share your thoughts..."
            className="input input-bordered flex-1 bg-base-300/50 focus:bg-base-300 focus:border-primary focus-ring transition-all duration-300"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={createComment.isPending}
          />
          <button
            type="submit"
            className="btn btn-primary btn-square btn-hover-lift"
            disabled={createComment.isPending || !content.trim()}
          >
            {createComment.isPending ? (
              <span className="loading loading-spinner loading-xs" />
            ) : (
              <SendIcon className="size-4" />
            )}
          </button>
        </form>
      ) : (
        <div className="flex items-center justify-between bg-linear-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-4 animate-fade-in-up">
          <span className="text-sm text-base-content/70 font-medium">
            Sign in to join the conversation
          </span>
          <SignInButton mode="modal">
            <button className="btn btn-primary btn-sm gap-1 btn-hover-lift">
              <LogInIcon className="size-4" />
              Sign In
            </button>
          </SignInButton>
        </div>
      )}

      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {comments.length === 0 ? (
          <div className="text-center py-12 text-base-content/50">
            <MessageSquareIcon className="size-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm font-medium">No comments yet</p>
            <p className="text-xs">Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment, index) => (
            <div
              key={comment.id}
              className="card bg-base-300/50 border border-base-300 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="card-body p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-8 rounded-full ring-2 ring-primary/30">
                        <img
                          src={comment.user?.imageUrl || "/default-avatar.png"}
                          alt={comment.user?.name || "User"}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/default-avatar.png";
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{comment.user?.name}</p>
                      <time className="text-xs text-base-content/50">
                        {comment.createdAt
                          ? new Date(comment.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })
                          : "Unknown date"}
                      </time>
                    </div>
                  </div>
                  {currentUserId === comment.userId && (
                    <button
                      onClick={() =>
                        confirm("Delete this comment?") &&
                        deleteComment.mutate({ commentId: comment.id })
                      }
                      className="btn btn-ghost btn-xs text-error hover:bg-error/10 transition-all duration-300"
                      disabled={deleteComment.isPending}
                    >
                      {deleteComment.isPending ? (
                        <span className="loading loading-spinner loading-xs" />
                      ) : (
                        <Trash2Icon className="size-3" />
                      )}
                    </button>
                  )}
                </div>
                <p className="text-sm text-base-content/80 leading-relaxed">{comment.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CommentsSection;
