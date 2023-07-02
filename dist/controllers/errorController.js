"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotFoundPage = void 0;
const getNotFoundPage = (req, res) => {
    res.status(404).render('404', { pageTitle: '404' });
};
exports.getNotFoundPage = getNotFoundPage;
