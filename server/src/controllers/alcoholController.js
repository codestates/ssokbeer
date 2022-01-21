import db from "../../models/index";
import { verify } from "../token/verify";

export const getSoju = async (req, res) => {
  try {
    res.status(200).json({ soju: db.soju });
  } catch {
    res.status(500).json({ message: "get 소주 리스트 실패" });
  }
};
export const getOneSoju = async (req, res) => {
  try {
    res.status(200).json({ soju: db.soju });
  } catch {
    res.status(500).json({ message: "getOne 소주 리스트 실패" });
  }
};

export const getBeer = async (req, res) => {
  try {
  } catch {
    res.status(500).json({ message: "get 맥주 리스트 실패" });
  }
};
