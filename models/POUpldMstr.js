/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
    const POUpldMstr = sequelize.define('POUpldMstr', {
      'PO No': {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: true,
        field: 'PONbr',
      },
      'PO Item': {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: true,
        field: 'POLinItm',
      },
      Division: {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: 'divCd',
      },
      Material: {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: 'matlNbr',
      },
      Size: {
        type: DataTypes.STRING(8),
        allowNull: false,
        primaryKey: true,
        field: 'sz',
      },
      Quantity: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: 'qty',
      },
      'Available Quantity': {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        field: 'availQty',
      },
      'Original Plant': {
        type: DataTypes.STRING(4),
        allowNull: true,
        field: 'origlPlnt',
      },
      Factory: {
        type: DataTypes.STRING(4),
        allowNull: false,
        field: 'fcty',
      },
      'Vendor Country': {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'vendCtry',
      },
      'GAC Date': {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'GACDt',
      },
      Season: {
        type: DataTypes.STRING(6),
        allowNull: true,
        field: 'sesn',
      },
      'Material Description': {
        type: DataTypes.STRING(200),
        allowNull: true,
        field: 'matlDesc',
      },
      'Glbl Cat Sum Desc': {
        type: DataTypes.STRING(200),
        allowNull: true,
        field: 'glblCatSumDesc',
      },
      Category: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'cat',
      },
      'Category Description': {
        type: DataTypes.STRING(200),
        allowNull: true,
        field: 'catDesc',
      },
      'Sub Category': {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'subcat',
      },
      'Sub Category Description': {
        type: DataTypes.STRING(200),
        allowNull: true,
        field: 'subCatDesc',
      },
      Silhouette: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'silh',
      },
      'Silhouette Description': {
        type: DataTypes.STRING(200),
        allowNull: true,
        field: 'silhDesc',
      },
      'Gender Age': {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'gndrAge',
      },
      'Gender Age Description': {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'gndrAgeDesc',
      },
      'PO Doc Dt': {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'PODocDt',
      },
      'PO Price': {
        type: DataTypes.DECIMAL,
        allowNull: true,
        field: 'POPrice',
      },
      ROS: {
        type: DataTypes.STRING(200),
        allowNull: true,
        field: 'resn',
      },
      Seller: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'seller',
      },
      Buyer: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'buyer',
      },
      'Buying Plant': {
        type: DataTypes.STRING(4),
        allowNull: true,
        field: 'buyngPlnt',
      },
      'Upload Tag': {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'upldTag',
      },
      'Selling Lot Number': {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'sellingLotNbr',
      },
      'Retail Price': {
        type: DataTypes.DECIMAL,
        allowNull: true,
        field: 'rtlPrc',
      },
      'Retail Price Currency': {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'rtlPrcCrnc',
      },
      Segmentation: {
        type: DataTypes.STRING(150),
        allowNull: true,
        field: 'sgmtn',
      },
      'Product Tier Description': {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'prodTierDesc',
      },
      'Future End Offer Date': {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'futsEndOfrDt',
      },
      Rebuy: {
        type: DataTypes.STRING(5),
        allowNull: true,
        field: 'rebuy',
      },
      'Expiration Date': {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'exprtnDt',
      },
      'Created By': {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: 'crtdBy',
      },
      'Created Date': {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'creatnDt',
      },
      'Updated By': {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'updtdBy',
      },
      'Updated Date': {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'updtDt',
      },
    }, {
      tableName: 'POUpldMstr',
      timestamps: true,
      createdAt: 'Created Date',
      updatedAt: 'Updated Date',
    });
    POUpldMstr.removeAttribute('id');
    return POUpldMstr;
  };
  