// * Redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// * Redux initialStates
import { initialStateNews } from "../initialStates";

// * ErrorMessages
import errorMessage from "@/error";

// * ALL NEWS
const newsAllAsync = createAsyncThunk("news/newsAllAsync", async () => {
  try {
    // Request Options
    let requestOptions = {
      method: "GET",
      redirect: "follow",
      next: {
        revalidate: 3600,
      },
    };

    // News limit most popular entries
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/news/new-last-db?limitMostPopularEntries=30`,
      requestOptions
    );

    // api success
    if (res.ok) {
      const dataJson = await res.json();
      return dataJson;
    }

    // api failed
    let err = errorMessage(
      false,
      res.status || 404,
      `ALL NEWS API Not Found`,
      `Not Found`
    );
    console.log("error fetch: ", err);

    return { new: [] };
  } catch (error) {
    // fetch failed
    let err = errorMessage(false, 503, `Failed to fetch ALL NEWS`, error);
    console.log("error fetch: ", err);
    return err;
  }
});

export const { actions, reducer } = createSlice({
  name: "news",
  initialState: initialStateNews,
  extraReducers: (builder) => {
    // * ALL NEWS
    builder.addCase(newsAllAsync.fulfilled, (state, action) => {
      state.news.mostPopularEntries = action.payload.mostPopularEntries;
    });
  },
});

// Exports
export { newsAllAsync };
