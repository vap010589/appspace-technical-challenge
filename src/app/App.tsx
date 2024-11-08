import React, { FC } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ListingPage } from "../pages/listing"
import { DetailPage } from "../pages/detail/DetailPage"
import "../index.css"

export const App: FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ListingPage />} />
      <Route path="/character/:id" element={<DetailPage />} />
    </Routes>
  </Router>
)
