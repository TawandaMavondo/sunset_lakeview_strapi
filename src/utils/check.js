/// Throws a [NullThrownError] if the given [reference] is `null`.
function checkNotNull(refrence, message) {
  if (message === null || message === undefined) message = "";
  if (refrence === null || refrence === undefined) {
    throw new Error(message, { cause: { message: message } });
  }
  return refrence;
}

module.exports = checkNotNull;
