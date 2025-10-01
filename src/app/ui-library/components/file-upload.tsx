import { ChangeEvent, useState } from "react";
import { Icon } from "./icons/icon";
import { Trans, useTranslation } from "react-i18next";
import { IconButton } from "./buttons/icon-button";

export default function FileUpload({
  setFileValue,
}: {
  setFileValue: (file: string | null) => void;
}) {
  const { t } = useTranslation();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setFileValue(file.name);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setFileValue(null);
  };

  return (
    <div className="mb-6">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer w-[90%] mx-auto sm:w-full">
        {uploadedFile ? (
          <div className="flex items-center">
            {uploadedFile.name}
            <IconButton
              onClick={handleRemoveFile}
              icon="close"
              color="gray-600"
            />
          </div>
        ) : (
          <>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />

            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col justify-center items-center"
            >
              <Icon name="upload" color="gray-400" size={48} />
              <p className="text-sm text-gray-600 mb-1 mt-3.5">
                <Trans
                  i18nKey="click_to_upload"
                  components={{
                    1: <span className="text-primary font-semibold" />,
                  }}
                />
              </p>
              <p className="text-xs text-gray-500">{t("file_type")}</p>
            </label>
          </>
        )}
      </div>
    </div>
  );
}
