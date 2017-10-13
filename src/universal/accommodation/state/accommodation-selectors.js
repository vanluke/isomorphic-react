export const selectRoot = state => state.accommodation;
export const selectAccommodations = state => selectRoot(state).accommodations;
export const selectIsLoading = state => selectRoot(state).isLoading;
export const selectAccommodation = state => selectRoot(state).accommodation;
export const selectOpenCreateModal = state => selectRoot(state).openCreateModal;
